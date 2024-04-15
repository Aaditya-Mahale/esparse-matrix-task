/**
 * v0 by Vercel.
 * 
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { ResponsiveBar } from "@nivo/bar"
import { Badge } from "@/components/ui/badge"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Component() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-[#FF6F00] p-5">
        <div className="mb-10">
          <h1 className="text-white text-xl font-bold">STARTUP IDEA</h1>
        </div>
        <ul className="space-y-2">
          <li className="text-white font-semibold" onClick={undefined}>
            Dashboard
          </li>
          <li className="text-gray-300" onClick={undefined}>
            Products
          </li>
          <li className="text-gray-300" onClick={undefined}>
            Customers
          </li>
          <li className="text-gray-300">Orders</li>
          <li className="text-gray-300">Shipments</li>
          <li className="text-gray-300">Transactions</li>
          <li className="text-gray-300">Settings</li>
          <li className="text-gray-300">Logout</li>
        </ul>
      </aside>
      <main className="flex-1 p-10">
        <header className="flex justify-between items-center">
          <h2 className="text-2xl font-bold" />
          <div className="flex items-center">
            <input className="mr-4 p-2 border rounded" placeholder="Search..." type="search" />
            <Avatar>
              <AvatarImage alt="User" src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <section className="grid grid-cols-3 gap-6 mt-6">
          <div className="col-span-2 bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">NO. Of Enquiry</h3>
            <BarChart className="w-full h-[300px]" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h3 className="text-lg font-semibold">Customers</h3>
            <p className="text-sm">Information About your Customers</p>
            <div className="grid grid-cols-2 gap-4">
              <Badge variant="secondary">120</Badge>
              <Badge variant="secondary">150</Badge>
              <Badge variant="secondary">150</Badge>
              <Badge variant="secondary">50</Badge>
            </div>
          </div>
        </section>
        <section className="mt-6 grid grid-cols-3 gap-6">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded">
                  <h4 className="text-sm font-semibold">Samsung S20 128 GB - Pink</h4>
                  <p>50 orders</p>
                  <p>Inventory: 700</p>
                  <p>Sale: $1,000.60</p>
                  <p>Price: $1,300.92</p>
                  <p>Today: $17,000.92</p>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                  <h4 className="text-sm font-semibold">Samsung S21 256 GB - Black</h4>
                  <p>25 orders</p>
                  <p>Inventory: 203</p>
                  <p>Sale: $1,200.60</p>
                  <p>Price: $1,500.92</p>
                  <p>Today: $12,000.82</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Stats Overview</h3>
            <p className="text-sm">Information about store visits</p>
            <div className="space-y-2 mt-4">
              <Progress className="w-full bg-purple-200" value={63} />
              <Progress className="w-full bg-blue-200" value={88} />
              <Progress className="w-full bg-green-200" value={38} />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => ${id}}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}