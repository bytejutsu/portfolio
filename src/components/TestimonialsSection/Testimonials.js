import Testimonial from "@/components/TestimonialsSection/Testimonial";

export default function Testimonials(){
    return (
        <div className="flex flex-wrap">
            <div className="xl:pt-12 pt-6 w-full xl:w-4/12 px-4 text-center">
                <Testimonial
                    name="Sarah Mitchell"
                    position="Senior Software Engineer"
                    company="TechPioneers Inc."
                    content={`
                I highly recommend ByteJutsu as a consulting and IT solutions company. It has been so important for us as we continue to grow our company.
                `}/>
            </div>
            <div className="w-full xl:w-4/12 px-4 text-center">
                <Testimonial
                    name="Jason Carter"
                    position="Marketing Director"
                    company="BrightIdeas Solutions"
                    content={`
                I would recommend ByteJutsu for anyone trying to find or create a custom and efficient software solution for their business. It has saved me so much time!
                `}/>
            </div>
            <div className="pt-6 w-full xl:w-4/12 px-4 text-center">
                <Testimonial
                    name="Emily Roberts"
                    position="Business Development Manager"
                    company="NextWave Innovations"
                    content={`
                I can't say enough about ByteJutsu. ByteJutsu's team is one of the best software engineering teams we have worked with so far. They really helped our business.
                `}/>
            </div>
        </div>
    );
}