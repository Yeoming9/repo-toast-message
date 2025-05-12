import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import { toastListState } from "../../store/client";

const NotiProgress = styled.div<{ duration: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background-color: #0b57d0;
  width: 100%;
  animation: progressBarAnim linear forwards;
  animation-duration: ${(props) => props.duration}ms;

  @keyframes progressBarAnim {
    from {
      transform: scaleX(1);
      transform-origin: left;
    }
    to {
      transform: scaleX(0);
      transform-origin: left;
    }
  }
`;

const ToastWrapper = styled.div<{ position: string }>`
  position: fixed;
  ${(props) => {
    const pos = props.position;
    const isBottom = pos.includes("bottom");

    return `
      ${pos.includes("top") ? "top: 20px;" : "bottom: 20px;"}
      ${pos.includes("left") ? "left: 20px;" : ""}
      ${pos.includes("center") ? "left: 50%; transform: translateX(-50%);" : ""}
      ${pos.includes("right") ? "right: 20px;" : ""}
      flex-direction: ${isBottom ? "column-reverse" : "column"};
    `;
  }}
  z-index: 1000;
  display: flex;
  gap: 8px;
`;

const ToastItem = styled.div`
  position: relative;
  background-color: black;
  color: #fff;
  padding: 16px 20px;
  font-size: 11px;
  display: flex;
  align-items: center;
`;

const CloseButton = styled.button`
  margin-left: 12px;
  background: none;
  border: none;
  color: white;
  font-size: 8px;
  font-weight: bold;
  cursor: pointer;
`;

const NotificationToast = () => {
  const [toastList, setToastList] = useRecoilState(toastListState);

  const grouped = toastList.reduce((acc, toast) => {
    if (!acc[toast.position]) acc[toast.position] = [];
    acc[toast.position].push(toast);
    return acc;
  }, {} as Record<string, typeof toastList>);

  useEffect(() => {
    const timers = toastList.map((toast) => {
      if (toast.visible && toast.delay !== null) {
        return setTimeout(() => {
          setToastList((prev) => prev.filter((t) => t.id !== toast.id));
        }, toast.delay);
      }
    });
    return () => timers.forEach((t) => t && clearTimeout(t));
  }, [toastList]);

  const handleClose = (id: string) => {
    setToastList((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      {toastList.length > 0 &&
        Object.entries(grouped).map(([position, toasts]) => (
          <ToastWrapper key={position} position={position}>
            {toasts.map((toast) => (
              <ToastItem key={toast.id}>
                {toast.message}
                <CloseButton onClick={() => handleClose(toast.id)}>
                  ✕
                </CloseButton>
                {toast.delay !== null && (
                  <NotiProgress
                    duration={toast.delay}
                    onAnimationEnd={() => handleClose(toast.id)}
                  />
                )}{" "}
              </ToastItem>
            ))}
          </ToastWrapper>
        ))}
    </>
  );
};

export default NotificationToast;
