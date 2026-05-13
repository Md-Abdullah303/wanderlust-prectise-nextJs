import AddPagination from "@/components/AddPagination";
import Banner from "@/components/Banner";
import ChoseWanderlust from "@/components/ChoseWanderlust";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <AddPagination/>
      <ChoseWanderlust/>
    </div>
  );
}
