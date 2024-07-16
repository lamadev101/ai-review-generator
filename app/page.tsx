import ReviewGenerator from "@/components/ReviewGenerator";
import { api } from "@/lib/baseUrl";



export default async function Home({ searchParams }: any) {

  const clientId = searchParams?.client_id;

  if (!clientId)
    return (
      <div>Page Not Found!!</div>
    )

  const { data } = await api.get(`/customer/${clientId}`)

  return (
    <main className="my-page">

      <div className="bg-gradient-to-br from-teal-800 to-teal-600 text-center py-4 text-white bg-opacity-10">Google Review Generator</div>
      <div className="text-center my-4">
        <div className=" italic text-orange-400">{data.businessType}</div>
        <div className="text-2xl">{data.businessName}</div>
        <p className="px-4 text-white mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, exercitationem!</p>
      </div>
      <ReviewGenerator googleReviewUrl={data.googleReviewUrl} />

      <footer className="py-4 md:py-10 px-4 md:px-20 bg-slate-800 text-white mt-40">
        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum inventore aliquam, sapiente maxime hic quaerat? Unde iure minus.</p>
        </div>
      </footer>
    </main>
  );
}
