import { Heading } from "@/components/Heading"
import { Payment } from './column'
import columns from "./column";
import { DataTable } from "./data-table"


async function getData(): Promise<Payment[]> {
  
  return [
    {
      id: "728ed52f",
      amount: 1000,
      email: "taneeshkerpalagmail.com",
      mobileNumber: "9916706697", 
      slNo: 1,
      upiId: "taneeshkerpala@okhdfcbank",
    },
    {
    id: "728ed52f",
    amount: 2000,
    email: "jnaneshps5@gmail.com",
    mobileNumber: "9019008540",
    slNo: 2,
    upiId: "jnaneshps5@okhdfcbank",
    },
    {
    id: "728ed52f",
    amount: 1500,
    email: "prajwalhassan@gmail.com",
    mobileNumber: "1234567890",
    slNo: 3,
    upiId: "prajwalhassan@okhdfcbank",
    },
    {
    id: "728ed52f",
    amount: 5000,
   
    email: "akjoker547@gmail.com",
    mobileNumber: "1234567890",
    slNo: 4,
    upiId: "akjoker547@okhdfcbank",
    },
    {
    id: "728ed52f",
    amount: 2500,
    email: "moomos456@gmail.com",
    mobileNumber: "1234567890",
    slNo: 5,
    upiId: "moomos456@okhdfcbank",
    },
    {
    id: "728ed52f",
    amount: 2500,
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    slNo: 6,
    upiId: "mimi@okhdfcbank",
    },
    {
    id: "728ed52f",
    amount: 2500,
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    slNo: 7,
    upiId: "mimi@okhdfcbank",
    },
    {
    id: "728ed52f",
    amount: 2500,
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    slNo: 8,
    upiId: "mimi@okhdfcbank",
    },
    {
    id: "728ed52f",
    amount: 2500,
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    slNo: 9,
    upiId: "mimi@okhdfcbank",
    },

    {
    id: "728ed52f",
    amount: 2500,
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    slNo: 10,
    upiId: "mimi@okhdfcbank",
    },

    {
    id: "728ed52f",
    amount: 2500,
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    slNo: 11,
    upiId: "mimi@okhdfcbank",
    },

    {
    id: "728ed52f",
    amount: 2500,
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    slNo: 12,
    upiId: "mimi@okhdfcbank",
    },

    {
    id: "728ed52f",
    amount: 2500,
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    slNo: 13,
    upiId: "mimi@okhdfcbank",
    },
    {
    id: "728ed52f",
    amount: 2500,
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    slNo: 14,
    upiId: "mimi@okhdfcbank",
    },
    {
    id: "728ed52f",
    amount: 2500,
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    slNo: 15,
    upiId: "mimi@okhdfcbank",
    },

    {
    id: "728ed52f",
    amount: 2500,
    email: "mimi@example.com",
    mobileNumber: "1234567890",
    slNo: 16,
    upiId: "mimi@okhdfcbank",

    },

    {
    id: "728ed52f",
    amount: 2500,
    email: "zexar@example.com",
    mobileNumber: "1234567890",
    slNo: 17,
    upiId: "zexar@okhdfcbank",
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
