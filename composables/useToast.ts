export interface ToastState {
  show: boolean;
  message: string;
  type: "info" | "success" | "error";
}

export function useToast() {
  const toast = useState<ToastState>("toast", () => ({
    show: false,
    message: "",
    type: "info",
  }));

  function showToast(message: string, type: ToastState["type"] = "info") {
    toast.value = { show: true, message, type };
    setTimeout(() => {
      toast.value.show = false;
    }, 3000);
  }

  return { toast: readonly(toast), showToast };
}
