"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Save } from "lucide-react"

export default function InvoiceSettings() {
  const [language, setLanguage] = useState("english")
  const [billingType, setBillingType] = useState("client")
  const [enclosure, setEnclosure] = useState("perGrade")
  const [afsTracker, setAfsTracker] = useState(false)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                    <SelectItem value="italian">Italian</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Billing Type</Label>
                <RadioGroup value={billingType} onValueChange={setBillingType} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="client" id="billing-client" />
                    <Label htmlFor="billing-client">Client</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="interOffice" id="billing-interoffice" />
                    <Label htmlFor="billing-interoffice">Inter Office Billing</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Enclosure</Label>
                <RadioGroup value={enclosure} onValueChange={setEnclosure} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="perGrade" id="enclosure-grade" />
                    <Label htmlFor="enclosure-grade">Per Grade</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="perProject" id="enclosure-project" />
                    <Label htmlFor="enclosure-project">Per Project</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="perName" id="enclosure-name" />
                    <Label htmlFor="enclosure-name">Per Name</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="afs-tracker" className="block">
                  AFS Tracker
                </Label>
                <div className="flex items-center space-x-2">
                  <Switch id="afs-tracker" checked={afsTracker} onCheckedChange={setAfsTracker} />
                  <Label htmlFor="afs-tracker">{afsTracker ? "Yes" : "No"}</Label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Settings
        </Button>
      </div>
    </div>
  )
}
