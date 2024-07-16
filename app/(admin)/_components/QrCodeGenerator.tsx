"use client"

import React from 'react';
import QRCode from 'qrcode.react';
import { DialogTitle, DialogContent, DialogHeader, DialogDescription } from '@/components/ui/dialog';
import { ExportBtn } from '@/components/btns';
import Link from 'next/link';

const QRCodeGenerator = ({ customerId }: { customerId: string }) => {
  const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
  const url = `${base_url}?client_id=${customerId}`;


  return (
    <DialogContent className="sm:max-w-[600px]" >
      <DialogHeader>
        <DialogTitle>QR Code Generator</DialogTitle>
        <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
      </DialogHeader>
      <div className="flex items-center justify-center mb-8">
        <div className="border border-slate-600 p-4">
          <QRCode value={url} />
        </div>
      </div>
      <div>Link: <Link target='_blank' href={url} className="underline italic" >{url}</Link></div>
      <div className="flex items-center justify-center">
        <ExportBtn onClick={() => { }} />
      </div>
    </DialogContent>
  );
};

export default QRCodeGenerator;
