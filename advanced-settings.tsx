"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Save } from "lucide-react"

export default function AdvancedSettings() {
  const [separateHourlyRate, setSeparateHourlyRate] = useState(false)
  const [fixedFees, setFixedFees] = useState(false)
  const [specialGrades, setSpecialGrades] = useState(false)
  const [includeDateEL, setIncludeDateEL] = useState(false)

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hourly-rate" className="block">
                  Separate hourly compliance rate
                </Label>
                <div className="flex items-center space-x-2">
                  <Switch id="hourly-rate" checked={separateHourlyRate} onCheckedChange={setSeparateHourlyRate} />
                  <Label htmlFor="hourly-rate">{separateHourlyRate ? "Yes" : "No"}</Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fixed-fees" className="block">
                  Items with fixed fees
                </Label>
                <div className="flex items-center space-x-2">
                  <Switch id="fixed-fees" checked={fixedFees} onCheckedChange={setFixedFees} />
                  <Label htmlFor="fixed-fees">{fixedFees ? "Yes" : "No"}</Label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="special-grades" className="block">
                  Special Grades (Specialist)
                </Label>
                <div className="flex items-center space-x-2">
                  <Switch id="special-grades" checked={specialGrades} onCheckedChange={setSpecialGrades} />
                  <Label htmlFor="special-grades">{specialGrades ? "Yes" : "No"}</Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="include-date" className="block">
                  Include date of EL in enclosure
                </Label>
                <div className="flex items-center space-x-2">
                  <Switch id="include-date" checked={includeDateEL} onCheckedChange={setIncludeDateEL} />
                  <Label htmlFor="include-date">{includeDateEL ? "Yes" : "No"}</Label>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Advanced Settings
        </Button>
      </div>
    </div>
  )
}
