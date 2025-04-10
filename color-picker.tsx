"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const presetColors = [
  "#000000",
  "#ffffff",
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#795548",
  "#607d8b",
]

export function ColorPicker() {
  const [color, setColor] = useState("#2196f3")

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start text-left font-normal">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full border" style={{ backgroundColor: color }} />
            <span>{color}</span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded border" style={{ backgroundColor: color }} />
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {presetColors.map((presetColor) => (
              <button
                key={presetColor}
                className="h-6 w-6 rounded-md border"
                style={{ backgroundColor: presetColor }}
                onClick={() => setColor(presetColor)}
              />
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
