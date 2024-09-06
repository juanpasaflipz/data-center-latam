import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>What makes Latin America an attractive market for data centers?</AccordionTrigger>
            <AccordionContent>
              Latin America is experiencing rapid digital transformation, with increasing demand for cloud services, IoT, and big data analytics. The regions growing economy and improving connectivity make it an ideal market for data center investments.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do you ensure the security and reliability of your data centers?</AccordionTrigger>
            <AccordionContent>
              Our data centers are built to Tier III standards, featuring redundant power and cooling systems, advanced fire suppression, and 24/7 security. We also implement the latest cybersecurity measures to protect against digital threats.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What are the expected returns on investment?</AccordionTrigger>
            <AccordionContent>
              While returns can vary, data center investments in emerging markets like Latin America have historically provided attractive yields. We target IRRs of 50-70% over a 5-7 year investment horizon.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}