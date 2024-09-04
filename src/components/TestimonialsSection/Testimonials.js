import Testimonial from "@/components/TestimonialsSection/Testimonial";

export default function Testimonials(){
    return (
        <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <Testimonial/>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
                <Testimonial/>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <Testimonial/>
            </div>
        </div>
    );
}