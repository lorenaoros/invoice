"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ArrowRight, Check, Edit, RefreshCw, Save } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function MappingConfig() {
  const [autoMapping, setAutoMapping] = useState(true)
  const [isMapping, setIsMapping] = useState(false)
  const [isMapped, setIsMapped] = useState(false)
  const [editingField, setEditingField] = useState<string | null>(null)

  // Sample source fields from S/4HANA
  const sourceFields = [
    { id: "VBELN", name: "VBELN", description: "Sales Document" },
    { id: "KUNAG", name: "KUNAG", description: "Sold-to party" },
    { id: "NETWR", name: "NETWR", description: "Net Value" },
    { id: "WAERK", name: "WAERK", description: "Currency" },
    { id: "FKDAT", name: "FKDAT", description: "Billing Date" },
    { id: "INCO1", name: "INCO1", description: "Incoterms" },
    { id: "MWSBP", name: "MWSBP", description: "Tax Amount" },
  ]

  // Sample target fields for invoice template
  const targetFields = [
    { id: "invoiceNumber", name: "Invoice Number", mapped: "VBELN" },
    { id: "customerID", name: "Customer ID", mapped: "KUNAG" },
    { id: "totalAmount", name: "Total Amount", mapped: "NETWR" },
    { id: "currency", name: "Currency", mapped: "WAERK" },
    { id: "invoiceDate", name: "Invoice Date", mapped: "FKDAT" },
    { id: "terms", name: "Terms", mapped: "INCO1" },
    { id: "taxAmount", name: "Tax Amount", mapped: "MWSBP" },
  ]

  const [mappedFields, setMappedFields] = useState(targetFields)

  const handleAutoMap = () => {
    setIsMapping(true)

    // Simulate mapping process
    setTimeout(() => {
      setIsMapping(false)
      setIsMapped(true)
    }, 2000)
  }

  const handleEditField = (fieldId: string) => {
    setEditingField(fieldId)
  }

  const handleSaveField = () => {
    setEditingField(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Switch id="auto-mapping" checked={autoMapping} onCheckedChange={setAutoMapping} />
          <Label htmlFor="auto-mapping">Auto-mapping</Label>
        </div>
        <Button onClick={handleAutoMap} disabled={isMapping || isMapped || !autoMapping}>
          {isMapping ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Mapping Fields...
            </>
          ) : isMapped ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Fields Mapped
            </>
          ) : (
            "Run Auto-mapping"
          )}
        </Button>
      </div>

      {isMapped && (
        <Alert>
          <AlertTitle>Auto-mapping Complete</AlertTitle>
          <AlertDescription>
            Fields have been automatically mapped based on name and data type matching. You can manually adjust any
            incorrect mappings.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 gap-4">
        {mappedFields.map((field) => (
          <Card key={field.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex items-stretch">
                <div className="bg-muted p-4 w-1/2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{field.name}</h4>
                      <p className="text-sm text-muted-foreground">Target Field</p>
                    </div>
                    <Badge variant="outline">Required</Badge>
                  </div>
                </div>

                <div className="flex items-center justify-center w-12 bg-muted/50">
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>

                <div className="p-4 w-1/2 flex items-center justify-between">
                  {editingField === field.id ? (
                    <div className="flex items-center space-x-2 w-full">
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                        {sourceFields.map((source) => (
                          <option key={source.id} value={source.id}>
                            {source.name} ({source.description})
                          </option>
                        ))}
                      </select>
                      <Button size="sm" variant="ghost" onClick={handleSaveField}>
                        <Save className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div>
                        <h4 className="font-medium">
                          {sourceFields.find((s) => s.id === field.mapped)?.name || "Not mapped"}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {sourceFields.find((s) => s.id === field.mapped)?.description || "Select a source field"}
                        </p>
                      </div>
                      <Button size="sm" variant="ghost" onClick={() => handleEditField(field.id)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-end">
        <Button>Save Mapping Configuration</Button>
      </div>
    </div>
  )
}
