import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const TabsComponent = () => {
  return (
    <Tabs defaultValue="all-deals" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="all-deals">All Deals</TabsTrigger>
        <TabsTrigger value="completed" disabled>
          Completed (3)
        </TabsTrigger>
        <TabsTrigger value="pnding" disabled>
          Pending (10)
        </TabsTrigger>
        <TabsTrigger value="waiting" disabled>
          Waiting for Confirmation (1)
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all-deals"></TabsContent>
    </Tabs>
  );
};

export default TabsComponent;
