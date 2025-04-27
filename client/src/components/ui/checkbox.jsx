import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        // Lớp cơ bản: border, background, shadow, transition, outline, etc.
        "peer border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800",
        // Các lớp trạng thái và focus
        "focus-visible:ring-2 focus-visible:ring-offset-2 outline-none",
        // Trạng thái Checked (màu xám)
        "data-[state=checked]:bg-gray-600 data-[state=checked]:border-gray-600",
        "dark:data-[state=checked]:bg-gray-500 dark:data-[state=checked]:border-gray-500",
        // Focus ring (màu xám)
        "focus-visible:ring-gray-400",
        // Trạng thái Invalid
        "aria-invalid:ring-red-300 dark:aria-invalid:ring-red-400 aria-invalid:border-red-400",
        // Kích thước, border, shadow, bo góc (ĐÃ THAY ĐỔI)
        "size-3.5 border shadow-sm transition-all rounded-sm", // Đổi size-4 -> size-3.5, Thêm lại rounded-sm
        // Trạng thái Disabled
        "disabled:cursor-not-allowed disabled:opacity-50",
        // Merge với các class được truyền từ props
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        // Màu của dấu check (vẫn là trắng)
        className="flex items-center justify-center text-white transition-none"
      >
        <svg
          // ĐÃ THAY ĐỔI: Giảm kích thước SVG cho phù hợp với checkbox nhỏ hơn
          className="size-2.5" // Đổi size-3 -> size-2.5
          fill="none"
          stroke="currentColor"
          strokeWidth="2" // Giữ nguyên độ dày nét hoặc giảm còn 1.5 nếu muốn mảnh hơn
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };