"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RefreshCw, FileJson } from "lucide-react"

export default function ImportData() {
  const [isImporting, setIsImporting] = useState(false)
  const [importProgress, setImportProgress] = useState(0)
  const [isImported, setIsImported] = useState(false)
  const [fileName, setFileName] = useState("")

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleImport = () => {
    if (!fileName) return

    setIsImporting(true)
    setImportProgress(0)

    // Simulate import process with progress updates
    const interval = setInterval(() => {
      setImportProgress((prev) => {
        const newProgress = prev + 10
        if (newProgress >= 100) {
          clearInterval(interval)
          setIsImporting(false)
          setIsImported(true)
          return 100
        }
        return newProgress
      })
    }, 500)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-12 text-center">
            <FileJson className="h-8 w-8 mb-4 text-muted-foreground" />
            <h3 className="text-lg font-medium mb-2">Upload JSON WIP Import File</h3>
            <p className="text-sm text-muted-foreground mb-4">Drag and drop your JSON file or click to browse</p>
            <Input id="file-upload" type="file" className="hidden" accept=".json" onChange={handleFileChange} />
            <Button asChild>
              <label htmlFor="file-upload">Select JSON File</label>
            </Button>
            {fileName && <p className="mt-2 text-sm font-medium">Selected: {fileName}</p>}
          </div>
        </CardContent>
      </Card>

      {fileName && (
        <div className="space-y-4">
          <Button onClick={handleImport} disabled={isImporting} className="w-full">
            {isImporting ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Importing Data...
              </>
            ) : (
              "Import JSON Data"
            )}
          </Button>

          {isImporting && (
            <div className="space-y-2">
              <Progress value={importProgress} className="h-2 w-full" />
              <p className="text-sm text-center text-muted-foreground">Importing data ({importProgress}% complete)</p>
            </div>
          )}

          {isImported && (
            <Alert>
              <AlertTitle>Import Complete</AlertTitle>
              <AlertDescription>
                JSON WIP data has been successfully imported. You can now proceed with the invoice configuration.
              </AlertDescription>
            </Alert>
          )}
        </div>
      )}

      {isImported && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Imported Data Preview</h3>
            <Badge variant="outline" className="ml-2">
              JSON WIP Data
            </Badge>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-4">
              <pre className="text-xs overflow-auto max-h-60 bg-muted p-2 rounded-md">
                {`{
  "invoiceData": {
    "invoiceNumber": "INV-12345",
    "customerID": "CUST-789",
    "totalAmount": 1030.00,
    "currency": "USD",
    "invoiceDate": "2025-04-10",
    "terms": "NET30",
    "taxAmount": 155.00
  },
  "lineItems": [
    {
      "description": "Product A",
      "quantity": 2,
      "unitPrice": 100.00,
      "tax": 20.00,
      "total": 220.00
    },
    {
      "description": "Service B",
      "quantity": 5,
      "unitPrice": 75.00,
      "tax": 75.00,
      "total": 450.00
    },
    {
      "description": "Product C",
      "quantity": 1,
      "unitPrice": 300.00,
      "tax": 60.00,
      "total": 360.00
    }
  ],
  "customer": {
    "name": "Customer Company Name",
    "address": "123 Customer St",
    "city": "Customer City",
    "country": "Country",
    "email": "customer@example.com"
  }
}`}
              </pre>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
