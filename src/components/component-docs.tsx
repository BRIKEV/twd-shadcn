import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";

interface ComponentDocsProps {
  testCode: string;
  testDescription: string;
  componentCode: string;
  componentDescription: string;
}

export function ComponentDocs({
  testCode,
  testDescription,
  componentCode,
  componentDescription,
}: ComponentDocsProps) {
  return (
    <Tabs defaultValue="test" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="test">TWD Test</TabsTrigger>
        <TabsTrigger value="code">Component Code</TabsTrigger>
      </TabsList>
      <TabsContent value="test" className="mt-4">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {testDescription}
          </p>
          <CodeBlock code={testCode} language="typescript" />
        </div>
      </TabsContent>
      <TabsContent value="code" className="mt-4">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {componentDescription}
          </p>
          <CodeBlock code={componentCode} language="tsx" />
        </div>
      </TabsContent>
    </Tabs>
  );
}
