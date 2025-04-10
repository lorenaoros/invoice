"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ColorPicker } from "@/components/color-picker"
import { AlignCenter, AlignLeft, AlignRight, Bold, Download, Italic, Save } from "lucide-react"

export default function TemplateEditor() {
  const [viewMode, setViewMode] = useState("design")
  const [selectedElement, setSelectedElement] = useState<string | null>(null)
  const [exportModalOpen, setExportModalOpen] = useState(false)
  const [exportFormat, setExportFormat] = useState("pdf")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Tabs defaultValue="design" onValueChange={setViewMode} className="w-auto">
          <TabsList>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => setExportModalOpen(true)}>
            <Download className="h-4 w-4 mr-2" />
            Export Invoice
          </Button>
          <Button size="sm">
            <Save className="h-4 w-4 mr-2" />
            Save Template
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {viewMode === "design" && (
          <div className="space-y-4 lg:col-span-1">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-medium mb-4">Template Elements</h3>

                <div className="space-y-2">
                  <div
                    className={`p-2 border rounded-md cursor-pointer hover:bg-muted/50 ${selectedElement === "header" ? "border-primary bg-muted/50" : ""}`}
                    onClick={() => setSelectedElement("header")}
                  >
                    <h4 className="font-medium">Header</h4>
                    <p className="text-sm text-muted-foreground">Company logo, name and contact info</p>
                  </div>

                  <div
                    className={`p-2 border rounded-md cursor-pointer hover:bg-muted/50 ${selectedElement === "billingInfo" ? "border-primary bg-muted/50" : ""}`}
                    onClick={() => setSelectedElement("billingInfo")}
                  >
                    <h4 className="font-medium">Billing Information</h4>
                    <p className="text-sm text-muted-foreground">Customer and invoice details</p>
                  </div>

                  <div
                    className={`p-2 border rounded-md cursor-pointer hover:bg-muted/50 ${selectedElement === "itemsTable" ? "border-primary bg-muted/50" : ""}`}
                    onClick={() => setSelectedElement("itemsTable")}
                  >
                    <h4 className="font-medium">Items Table</h4>
                    <p className="text-sm text-muted-foreground">Products/services with prices</p>
                  </div>

                  <div
                    className={`p-2 border rounded-md cursor-pointer hover:bg-muted/50 ${selectedElement === "summary" ? "border-primary bg-muted/50" : ""}`}
                    onClick={() => setSelectedElement("summary")}
                  >
                    <h4 className="font-medium">Summary</h4>
                    <p className="text-sm text-muted-foreground">Subtotal, taxes, and total</p>
                  </div>

                  <div
                    className={`p-2 border rounded-md cursor-pointer hover:bg-muted/50 ${selectedElement === "footer" ? "border-primary bg-muted/50" : ""}`}
                    onClick={() => setSelectedElement("footer")}
                  >
                    <h4 className="font-medium">Footer</h4>
                    <p className="text-sm text-muted-foreground">Payment terms and notes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {selectedElement && (
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium mb-4">Element Properties</h3>

                  {selectedElement === "header" && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="logo">Company Logo</Label>
                        <div className="flex items-center space-x-2">
                          <div className="h-16 w-32 border rounded flex items-center justify-center bg-muted/50">
                            <p className="text-sm text-muted-foreground">Logo Preview</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Upload
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input id="companyName" defaultValue="Your Company Name" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactInfo">Contact Information</Label>
                        <Input id="contactInfo" defaultValue="123 Business St, City, Country" />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <AlignLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <AlignCenter className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <AlignRight className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Bold className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Italic className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {selectedElement === "itemsTable" && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Table Style</Label>
                        <Select defaultValue="bordered">
                          <SelectTrigger>
                            <SelectValue placeholder="Select style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bordered">Bordered</SelectItem>
                            <SelectItem value="striped">Striped</SelectItem>
                            <SelectItem value="minimal">Minimal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Columns</Label>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <Switch id="col-item" defaultChecked />
                            <Label htmlFor="col-item">Item Description</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="col-quantity" defaultChecked />
                            <Label htmlFor="col-quantity">Quantity</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="col-price" defaultChecked />
                            <Label htmlFor="col-price">Unit Price</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="col-tax" defaultChecked />
                            <Label htmlFor="col-tax">Tax</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="col-total" defaultChecked />
                            <Label htmlFor="col-total">Total</Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Header Background</Label>
                        <ColorPicker />
                      </div>
                    </div>
                  )}

                  {(selectedElement === "billingInfo" ||
                    selectedElement === "summary" ||
                    selectedElement === "footer") && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Font Size</Label>
                        <Slider defaultValue={[14]} max={24} min={8} step={1} />
                      </div>

                      <div className="space-y-2">
                        <Label>Visibility</Label>
                        <div className="space-y-1">
                          {selectedElement === "billingInfo" && (
                            <>
                              <div className="flex items-center space-x-2">
                                <Switch id="show-invoice-number" defaultChecked />
                                <Label htmlFor="show-invoice-number">Invoice Number</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Switch id="show-date" defaultChecked />
                                <Label htmlFor="show-date">Invoice Date</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Switch id="show-due-date" defaultChecked />
                                <Label htmlFor="show-due-date">Due Date</Label>
                              </div>
                            </>
                          )}

                          {selectedElement === "summary" && (
                            <>
                              <div className="flex items-center space-x-2">
                                <Switch id="show-subtotal" defaultChecked />
                                <Label htmlFor="show-subtotal">Subtotal</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Switch id="show-tax" defaultChecked />
                                <Label htmlFor="show-tax">Tax</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Switch id="show-discount" defaultChecked />
                                <Label htmlFor="show-discount">Discount</Label>
                              </div>
                            </>
                          )}

                          {selectedElement === "footer" && (
                            <>
                              <div className="flex items-center space-x-2">
                                <Switch id="show-terms" defaultChecked />
                                <Label htmlFor="show-terms">Payment Terms</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Switch id="show-notes" defaultChecked />
                                <Label htmlFor="show-notes">Notes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Switch id="show-signature" defaultChecked />
                                <Label htmlFor="show-signature">Signature</Label>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        )}

        <div className={viewMode === "design" ? "lg:col-span-2" : "lg:col-span-3"}>
          <Card className="border-2 min-h-[800px]">
            <CardContent className="p-6">
              {/* Invoice Template Preview */}
              <div className="space-y-8">
                {/* Header */}
                <div className="flex justify-between items-start border-b pb-6">
                  <div>
                    <div className="h-16 w-32 bg-muted rounded flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">Company Logo</p>
                    </div>
                    <h2 className="text-xl font-bold mt-2">Your Company Name</h2>
                    <p className="text-sm text-muted-foreground">123 Business St, City, Country</p>
                    <p className="text-sm text-muted-foreground">contact@yourcompany.com | (123) 456-7890</p>
                  </div>
                  <div className="text-right">
                    <h1 className="text-2xl font-bold text-primary">INVOICE</h1>
                    <div className="mt-2">
                      <p className="text-sm">
                        <span className="font-medium">Invoice #:</span> INV-12345
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Date:</span> April 10, 2025
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Due Date:</span> May 10, 2025
                      </p>
                    </div>
                  </div>
                </div>

                {/* Billing Information */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium uppercase text-muted-foreground mb-2">Bill To:</h3>
                    <p className="font-medium">Customer Company Name</p>
                    <p className="text-sm">123 Customer St</p>
                    <p className="text-sm">Customer City, Country</p>
                    <p className="text-sm">customer@example.com</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium uppercase text-muted-foreground mb-2">Payment Details:</h3>
                    <p className="text-sm">
                      <span className="font-medium">Method:</span> Bank Transfer
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Account:</span> XXXX-XXXX-XXXX-1234
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Reference:</span> INV-12345
                    </p>
                  </div>
                </div>

                {/* Items Table */}
                <div>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border p-2 text-left">Item Description</th>
                        <th className="border p-2 text-center">Quantity</th>
                        <th className="border p-2 text-right">Unit Price</th>
                        <th className="border p-2 text-right">Tax</th>
                        <th className="border p-2 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Product A</td>
                        <td className="border p-2 text-center">2</td>
                        <td className="border p-2 text-right">$100.00</td>
                        <td className="border p-2 text-right">$20.00</td>
                        <td className="border p-2 text-right">$220.00</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Service B</td>
                        <td className="border p-2 text-center">5</td>
                        <td className="border p-2 text-right">$75.00</td>
                        <td className="border p-2 text-right">$75.00</td>
                        <td className="border p-2 text-right">$450.00</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Product C</td>
                        <td className="border p-2 text-center">1</td>
                        <td className="border p-2 text-right">$300.00</td>
                        <td className="border p-2 text-right">$60.00</td>
                        <td className="border p-2 text-right">$360.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Summary */}
                <div className="flex justify-end">
                  <div className="w-64">
                    <div className="flex justify-between py-2">
                      <span className="font-medium">Subtotal:</span>
                      <span>$925.00</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-medium">Tax (20%):</span>
                      <span>$155.00</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-medium">Discount:</span>
                      <span>-$50.00</span>
                    </div>
                    <div className="flex justify-between py-2 border-t font-bold">
                      <span>Total:</span>
                      <span>$1,030.00</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t pt-6 space-y-4">
                  <div>
                    <h3 className="text-sm font-medium">Payment Terms</h3>
                    <p className="text-sm text-muted-foreground">
                      Payment due within 30 days. Please include the invoice number on your payment.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Notes</h3>
                    <p className="text-sm text-muted-foreground">
                      Thank you for your business! If you have any questions about this invoice, please contact our
                      accounting department.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  \
  exportModalOpen && (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-background rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-bold mb-4">Export Invoice</h2>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Export Format</Label>
            <Select value={exportFormat} onValueChange={setExportFormat}>
              <SelectTrigger>
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF Document</SelectItem>
                <SelectItem value="json">JSON Data</SelectItem>
                <SelectItem value="html">HTML</SelectItem>
                <SelectItem value="csv">CSV (Line items only)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {exportFormat === "pdf" && (
            <div className="space-y-2">
              <Label>PDF Options</Label>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Switch id="include-header" defaultChecked />
                  <Label htmlFor="include-header">Include Header</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="include-footer" defaultChecked />
                  <Label htmlFor="include-footer">Include Footer</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="compress" defaultChecked />
                  <Label htmlFor="compress">Compress PDF</Label>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" onClick={() => setExportModalOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                // Simulate export
                setTimeout(() => {
                  setExportModalOpen(false)
                }, 1000)
              }}
            >
              Export
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
  )
}
