import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";

export default function AlertsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-4">Alerts</h1>
        <p className="text-gray-600 mb-8">A collection of alert components for different types of notifications.</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-4">Alert Variants</h2>
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Default Alert</AlertTitle>
              <AlertDescription>This is a default alert — check it out!</AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>Something went wrong! Please try again later.</AlertDescription>
            </Alert>

            <Alert className="border-green-200 bg-green-50 text-green-800">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>Your changes have been saved successfully.</AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>Please backup your data before proceeding.</AlertDescription>
            </Alert>
          </div>
        </section>
      </div>
    </div>
  );
}
