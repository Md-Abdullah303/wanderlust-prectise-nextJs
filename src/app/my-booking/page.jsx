import BookingCard from "@/components/sheared/BookingCard";
import { auth } from "../lib/auth";
import { headers } from "next/headers";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const USERDATA = session?.user;

  const res = await fetch(
    `https://wanderlust-server-theta.vercel.app/booking/${USERDATA.id}`,
  );
  const bookingDatas = await res.json();
  // console.log(bookingDatas);

  return (
    <div className="w-[90%] md:w-[85%] md:container mx-auto py-20">
      <h1 className="text-3xl font-bold">My Bookings</h1>
      <p className="text-gray-400">
        Manage and view your upcoming travel plans
      </p>
      <div className="mt-8 flex flex-col items-start gap-4 w-full">
        {bookingDatas.length == 0 ? (
          <div className="text-center w-full space-y-2 bg-slate-200 py-10">
            <h1 className="text-2xl font-bold">Booking is Empty</h1>
            <p className="text-lg text-gray-400">Go and add some booking</p>
          </div>
        ) : (
          bookingDatas.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))
        )}
      </div>
    </div>
  );
};

export default MyBookingPage;
