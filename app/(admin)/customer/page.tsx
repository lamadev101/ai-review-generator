"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AiOutlineDelete } from "react-icons/ai"
import { IoQrCodeOutline } from "react-icons/io5"
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";

import BreadCrumbNav from "../_components/BreadCrumbNav";
import QRCodeGenerator from "../_components/QrCodeGenerator";
import { api } from "@/lib/baseUrl";
import { useEffect, useState } from "react";



const ClientPage = () => {
  const [customers, setCustomers] = useState<any[]>([]);


  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await api.get('/customer');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <>
      <BreadCrumbNav currentPage="Cutomer List" />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Customer Name</TableHead>
            <TableHead>Business Type</TableHead>
            <TableHead>Business Name</TableHead>
            <TableHead>Google Review Url</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>


        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell className="font-medium">{customer.customerName}</TableCell>
              <TableCell>{customer.businessType}</TableCell>
              <TableCell>{customer.businessName}</TableCell>
              <TableCell>{customer.googleReviewUrl.split('?')[0]}</TableCell>
              <TableCell>
                <div className="flex gap-1 text-xl">
                  <Link className="text-blue-500/80" href={`/customer-details/?client_id=${customer.id}`}>
                    <FaEdit />
                  </Link>

                  <Dialog>
                    <DialogTrigger asChild>
                      <IoQrCodeOutline className="text-green-800/80" />
                    </DialogTrigger>
                    <QRCodeGenerator customerId={customer.id} />
                  </Dialog>
                  <AiOutlineDelete className="text-red-800/80" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>


        <TableFooter>
          <TableRow>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  )
}
export default ClientPage