import Testimonial from "@/components/TestimonialsSection/Testimonial";

export default function Testimonials(){
    return (
        <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full lg:w-4/12 px-4 text-center">
                <Testimonial content={`
                I highly recommend ByteJutsu as a consulting and IT solutions company. It has been so important for us as we continue to grow our company.
                `}/>
            </div>
            <div className="w-full lg:w-4/12 px-4 text-center">
                <Testimonial content={`
                I would recommend ByteJutsu for anyone trying to find or create a custom and efficient software solution for their business. It has saved me so much time!
                `}/>
            </div>
            <div className="pt-6 w-full lg:w-4/12 px-4 text-center">
                <Testimonial content={`
                I can't say enough about ByteJutsu. ByteJutsu's team is one of the best software engineering teams we have worked with so far. They really helped our business.
                `}/>
            </div>
        </div>
    );
}