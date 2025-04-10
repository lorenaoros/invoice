"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save } from "lucide-react"

export default function BillingSettings() {
  const [vat, setVat] = useState("7.7")
  const [lumpSumExpenses, setLumpSumExpenses] = useState("")
  const [additionalDiscount, setAdditionalDiscount] = useState("")
  const [expenses, setExpenses] = useState("")
  const [footerCity, setFooterCity] = useState("zurich")

  // Swiss cities for the footer dropdown
  const swissCities = [
    { value: "zurich", label: "Zürich" },
    { value: "geneva", label: "Geneva" },
    { value: "basel", label: "Basel" },
    { value: "bern", label: "Bern" },
    { value: "lausanne", label: "Lausanne" },
    { value: "winterthur", label: "Winterthur" },
    { value: "lucerne", label: "Lucerne" },
    { value: "stgallen", label: "St. Gallen" },
    { value: "lugano", label: "Lugano" },
    { value: "biel", label: "Biel/Bienne" },
    { value: "thun", label: "Thun" },
    { value: "bellinzona", label: "Bellinzona" },
    { value: "neuchatel", label: "Neuchâtel" },
    { value: "chur", label: "Chur" },
    { value: "sion", label: "Sion" },
    { value: "fribourg", label: "Fribourg" },
    { value: "schaffhausen", label: "Schaffhausen" },
    { value: "uster", label: "Uster" },
    { value: "zug", label: "Zug" },
  ]

  return (
    <div className="space-y-6">
      <Tabs defaultValue="billing" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="billing">Billing Options</TabsTrigger>
          <TabsTrigger value="footer">Billing Footer</TabsTrigger>
        </TabsList>

        <TabsContent value="billing">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="vat">VAT (%)</Label>
                    <Input
                      id="vat"
                      type="number"
                      step="0.1"
                      value={vat}
                      onChange={(e) => setVat(e.target.value)}
                      placeholder="7.7"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lump-sum">Lump Sum Expenses</Label>
                    <Input
                      id="lump-sum"
                      type="number"
                      value={lumpSumExpenses}
                      onChange={(e) => setLumpSumExpenses(e.target.value)}
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="discount">Additional Discount</Label>
                    <Input
                      id="discount"
                      type="number"
                      value={additionalDiscount}
                      onChange={(e) => setAdditionalDiscount(e.target.value)}
                      placeholder="0.00"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expenses">Expenses</Label>
                    <Input
                      id="expenses"
                      type="number"
                      value={expenses}
                      onChange={(e) => setExpenses(e.target.value)}
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="footer">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="footer-city">City in Footer</Label>
                  <Select value={footerCity} onValueChange={setFooterCity}>
                    <SelectTrigger id="footer-city">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      {swissCities.map((city) => (
                        <SelectItem key={city.value} value={city.value}>
                          {city.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="p-4 border rounded-md bg-muted/50">
                  <h3 className="font-medium mb-2">Footer Preview</h3>
                  <p className="text-sm text-muted-foreground">
                    {swissCities.find((city) => city.value === footerCity)?.label}, {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Billing Settings
        </Button>
      </div>
    </div>
  )
}
