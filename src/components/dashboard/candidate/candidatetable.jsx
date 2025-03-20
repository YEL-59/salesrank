import React, { useState } from "react";
import { Circle } from "rc-progress";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
    name: "Sophia Turner",
    "employ-type": "Full-time",
    "work-type": "Hybrid",
    "applied-date": "2030-10-01",
    appliedRole: {
      title: "Legal Advisor",
      department: "Legal",
    },
    resume: "https://example.com/resume.pdf",
    coverLetter: "https://example.com/coverletter.pdf",
    linkscore: "70%",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
    name: "Lucas Green",
    "employ-type": "Full-time",
    "work-type": "Remote",
    "applied-date": "2030-12-01",
    linkscore: "20%",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
    name: "Noah Brown",
    "employ-type": "Full-time",
    "work-type": "On-site",
    "applied-date": "2030-10-01",
    linkscore: "100%",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
    name: "Emma Williams",
    "employ-type": "Full-time",
    "work-type": "Hybrid",
    "applied-date": "2030-10-03",
    linkscore: "50%",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
    name: "Sophia Davis",
    "employ-type": "Full-time",
    "work-type": "Hybrid",
    "applied-date": "2030-10-09",
    linkscore: "90%",
  },
];

const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "appliedRole",
    header: "Applied Role ",
    cell: ({ row }) => (
      <div className="flex flex-col gap-1">
        <span className="font-bold">{row.original.appliedRole?.title}</span>
        <span className="text-gray-500">
          {row.original.appliedRole?.department}
        </span>
      </div>
    ),
  },

  {
    accessorKey: "employ-type",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Employment Type <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("employ-type")}</div>
    ),
  },
  {
    accessorKey: "work-type",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Work Type <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("work-type")}</div>
    ),
  },
  {
    accessorKey: "applied-date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Applied Date <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("applied-date")}</div>
    ),
  },
  {
    accessorKey: "attachment",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Attachment <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex flex-col gap-1">
        <a
          href={row.original.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Resume
        </a>
        <a
          href={row.original.coverLetter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Cover Letter
        </a>
      </div>
    ),
  },

  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Status <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize ">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  //   {
  //     accessorKey: "amount",
  //     header: () => <div className="text-right">Amount</div>,
  //     cell: ({ row }) => {
  //       const amount = parseFloat(row.getValue("amount"));
  //       const formatted = new Intl.NumberFormat("en-US", {
  //         style: "currency",
  //         currency: "USD",
  //       }).format(amount);
  //       return <div className="text-right font-medium">{formatted}</div>;
  //     },
  //   },
  {
    accessorKey: "linkscore",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Score <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => {
      const score = row.getValue("linkscore");
      const percentage = parseFloat(score);

      return (
        <div className="flex items-center justify-center">
          <div className="relative w-10 h-10">
            <Circle
              percent={percentage}
              strokeWidth={8}
              strokeColor={percentage >= 50 ? "#4CAF50" : "#F44336"}
              trailWidth={8}
              trailColor="#E5E7EB"
            />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
              {score}
            </span>
          </div>
        </div>
      );
    },
  },
  //   {
  //     id: "actions",
  //     enableHiding: false,
  //     cell: ({ row }) => (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(row.original.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     ),
  //   },
];

export function Candidatetable() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: { sorting, columnFilters, columnVisibility, rowSelection },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={table.getColumn("email")?.getFilterValue() || ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
