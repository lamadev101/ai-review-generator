"use client"

import Groq from "groq-sdk";
import { useEffect, useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CopyIcon, ReloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";


const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_API_GROQ_KEY,
  dangerouslyAllowBrowser: true,
});

const getGroqChatCompletion = () => {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "write a good unique review for hotel in 3lines without hotel name",
      },
    ],
    model: "llama3-8b-8192",
  });
}



const ReviewGenerator = ({ googleReviewUrl }: { googleReviewUrl: string }) => {
  const [isGenerate, setIsGenerate] = useState(false)
  const [review, setReview] = useState("")

  useEffect(() => {
    const fetchChatCompletion = async () => {
      try {
        const chatCompletion = await getGroqChatCompletion();
        const review = chatCompletion.choices[0]?.message.content?.replace(/^"(.*)"$/, '$1') || "";
        setReview(review);
        setIsGenerate(false)
      } catch (error) {
        console.error("Error fetching chat completion:", error);
      }
    };
    if (isGenerate)
      fetchChatCompletion();
  }, [isGenerate]);



  return (
    <section className="flex items-center justify-center rounded-md">
      <div className="shadow-lg rounded-md w-[600px] p-5 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
        <div className="">
          <Textarea
            onChange={(e) => setReview(e.target.value)}
            value={review}
            className="w-full h-80 lg:h-40 border border-[#064343] italic"
          />
          <div className="flex items-center justify-center gap-2 mt-4 md:mt-6 w-full">
            <Button
              variant="outline"
              onClick={() => setIsGenerate(true)}
              className="w-100 border-[#064343]"
            >
              <span className="flex gap-2 items-center">
                <ReloadIcon />
                {review.length > 0 ? "Re-Generate" : "Generate Review"}
              </span>
            </Button>
            <Button className="w-100 bg-[#064343]">
              <CopyToClipboard text={review}>
                <Link target="_blank" href={googleReviewUrl}>
                  <span className="flex gap-2 items-center">
                    <CopyIcon />
                    Review Now
                  </span>
                </Link>
              </CopyToClipboard>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewGenerator

