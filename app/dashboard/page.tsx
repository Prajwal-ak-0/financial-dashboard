import { Heading } from "@/components/Heading"
import { Payment, columns } from "./column"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 1000,
      status: "pending",
      email: "taneeshkerpala@gmail.com",
      mobileNumber: "9916706697", 

    },
    {
    id: "728ed52f",
    amount: 2000,
    status: "pending",
    email: "jnaneshps5@gmail.com",
    mobileNumber: "9019008540",
    },
    {
    id: "728ed52f",
    amount: 1500,
    status: "success",
    email: "prajwalhassan@gmail.com",
    mobileNumber: "1234567890",
    },
    {
    id: "728ed52f",
    amount: 5000,
    status: "processing",
    email: "akjoker547@gmail.com",
    mobileNumber: "1234567890",
    },
    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "moomos456@gmail.com",
    mobileNumber: "1234567890",
    },
    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    },
    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    },
    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    },
    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    },

    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    },

    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    },

    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    },

    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    },
    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    },
    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    },

    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    },

    {
    id: "728ed52f",
    amount: 2500,
    status: "success",
    email: "zexar@example.com",
    mobileNumber: "1234567890",
    },

  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <Heading 
          title="Dashboard"
          description="Welcome to the dashboard."
      />
      <DataTable columns={columns} data={data} />
    </div>
  )
}
