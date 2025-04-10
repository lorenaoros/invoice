import ImportData from "@/components/import-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Save } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import MappingConfig from "@/components/mapping-config"
import TemplateEditor from "@/components/template-editor"

export default function Dashboard() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <h1 className="text-3xl font-bold">Invoice Management System</h1>

      {/* Import Data Section */}
      <Card>
        <CardHeader>
          <CardTitle>Import Data</CardTitle>
          <CardDescription>Upload JSON WIP data for invoice processing</CardDescription>
        </CardHeader>
        <CardContent>
          <ImportData />
        </CardContent>
      </Card>

      {/* Invoice Settings Section */}
      <Card>
        <CardHeader>
          <CardTitle>Invoice Settings</CardTitle>
          <CardDescription>Configure basic invoice settings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="english">
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
                <RadioGroup defaultValue="client" className="flex flex-col space-y-1">
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

            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Enclosure</Label>
                <RadioGroup defaultValue="perGrade" className="flex flex-col space-y-1">
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
                  <Switch id="afs-tracker" />
                  <Label htmlFor="afs-tracker">No</Label>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Billing Settings Section */}
      <Card>
        <CardHeader>
          <CardTitle>Billing Settings</CardTitle>
          <CardDescription>Configure billing options and expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="vat">VAT (%)</Label>
                <Input id="vat" type="number" step="0.1" defaultValue="7.7" placeholder="7.7" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lump-sum">Lump Sum Expenses</Label>
                <Input id="lump-sum" type="number" placeholder="0.00" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="discount">Additional Discount</Label>
                <Input id="discount" type="number" placeholder="0.00" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expenses">Expenses</Label>
                <Input id="expenses" type="number" placeholder="0.00" />
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="footer-city">Billing Footer - City</Label>
              <Select defaultValue="zurich">
                <SelectTrigger id="footer-city">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="zurich">Zürich</SelectItem>
                  <SelectItem value="geneva">Geneva</SelectItem>
                  <SelectItem value="basel">Basel</SelectItem>
                  <SelectItem value="bern">Bern</SelectItem>
                  <SelectItem value="lausanne">Lausanne</SelectItem>
                  <SelectItem value="winterthur">Winterthur</SelectItem>
                  <SelectItem value="lucerne">Lucerne</SelectItem>
                  <SelectItem value="stgallen">St. Gallen</SelectItem>
                  <SelectItem value="lugano">Lugano</SelectItem>
                  <SelectItem value="biel">Biel/Bienne</SelectItem>
                  <SelectItem value="thun">Thun</SelectItem>
                  <SelectItem value="bellinzona">Bellinzona</SelectItem>
                  <SelectItem value="neuchatel">Neuchâtel</SelectItem>
                  <SelectItem value="chur">Chur</SelectItem>
                  <SelectItem value="sion">Sion</SelectItem>
                  <SelectItem value="fribourg">Fribourg</SelectItem>
                  <SelectItem value="schaffhausen">Schaffhausen</SelectItem>
                  <SelectItem value="uster">Uster</SelectItem>
                  <SelectItem value="zug">Zug</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Settings Section */}
      <Card>
        <CardHeader>
          <CardTitle>Advanced Settings</CardTitle>
          <CardDescription>Configure advanced billing options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hourly-rate" className="block">
                  Separate hourly compliance rate
                </Label>
                <div className="flex items-center space-x-2">
                  <Switch id="hourly-rate" />
                  <Label htmlFor="hourly-rate">No</Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fixed-fees" className="block">
                  Items with fixed fees
                </Label>
                <div className="flex items-center space-x-2">
                  <Switch id="fixed-fees" />
                  <Label htmlFor="fixed-fees">No</Label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="special-grades" className="block">
                  Special Grades (Specialist)
                </Label>
                <div className="flex items-center space-x-2">
                  <Switch id="special-grades" />
                  <Label htmlFor="special-grades">No</Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="include-date" className="block">
                  Include date of EL in enclosure
                </Label>
                <div className="flex items-center space-x-2">
                  <Switch id="include-date" />
                  <Label htmlFor="include-date">No</Label>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Field Mapping Section */}
      <Card>
        <CardHeader>
          <CardTitle>Field Mapping Configuration</CardTitle>
          <CardDescription>Configure how imported fields map to your invoice template</CardDescription>
        </CardHeader>
        <CardContent>
          <MappingConfig />
        </CardContent>
      </Card>

      {/* Template Editor Section */}
      <Card>
        <CardHeader>
          <CardTitle>Invoice Template Editor</CardTitle>
          <CardDescription>Customize how your invoices look and what information they display</CardDescription>
        </CardHeader>
        <CardContent>
          <TemplateEditor />
        </CardContent>
      </Card>

      {/* Save All Button */}
      <div className="flex justify-end">
        <Button size="lg">
          <Save className="mr-2 h-4 w-4" />
          Save All Settings
        </Button>
      </div>
    </div>
  )
}
