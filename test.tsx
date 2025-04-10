import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import InvoiceSettings from "@/components/invoice-settings"
import BillingSettings from "@/components/billing-settings"
import AdvancedSettings from "@/components/advanced-settings"
import ImportData from "@/components/import-data"
import MappingConfig from "@/components/mapping-config"
import TemplateEditor from "@/components/template-editor"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Invoice Management System</h1>

      <Tabs defaultValue="settings" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
          <TabsTrigger value="import">Import Data</TabsTrigger>
          <TabsTrigger value="mapping">Field Mapping</TabsTrigger>
          <TabsTrigger value="template">Template</TabsTrigger>
        </TabsList>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Invoice Settings</CardTitle>
              <CardDescription>Configure basic invoice settings</CardDescription>
            </CardHeader>
            <CardContent>
              <InvoiceSettings />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Billing Settings</CardTitle>
              <CardDescription>Configure billing options and footer</CardDescription>
            </CardHeader>
            <CardContent>
              <BillingSettings />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
              <CardDescription>Configure advanced billing options</CardDescription>
            </CardHeader>
            <CardContent>
              <AdvancedSettings />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="import">
          <Card>
            <CardHeader>
              <CardTitle>Import Data</CardTitle>
              <CardDescription>Upload JSON WIP data for invoice processing</CardDescription>
            </CardHeader>
            <CardContent>
              <ImportData />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mapping">
          <Card>
            <CardHeader>
              <CardTitle>Field Mapping Configuration</CardTitle>
              <CardDescription>Configure how imported fields map to your invoice template</CardDescription>
            </CardHeader>
            <CardContent>
              <MappingConfig />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="template">
          <Card>
            <CardHeader>
              <CardTitle>Invoice Template Editor</CardTitle>
              <CardDescription>Customize how your invoices look and what information they display</CardDescription>
            </CardHeader>
            <CardContent>
              <TemplateEditor />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
