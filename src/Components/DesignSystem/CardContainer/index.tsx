import useAnimation from "@/Hooks/useAnimation";

const CardContainer = ({customClasses=''}) => {
    const { slideRightClasses ,fadeInClasses } = useAnimation();
    const {slideUpClasses} = useAnimation(1000);

    return (
      <div
        className={`flex flex-col rounded-md md:rounded-xl bg-white ${customClasses} overflow-hidden`}
      >
        <img
          src="https://cdn.dotpe.in/dotpe-website-live/images/qr-solutions-image-business-solution-240622.jpg"
          className={`${fadeInClasses}`}
        />
        <article className="relative flex flex-col gap-4 p-4 md:p-6">
          <h3
            className={`text-blue-600 font-semibold text-lg ${slideRightClasses}`}
          >
            Treat each customer like a VIP with our powerful marketing tools.
          </h3>
          <section className={`${slideUpClasses}`}>
            Our 2-way integrations with Swiggy, Zomato, Amazon Foods let you
            manage orders, menu, pricing, inventory & deals in real-time on our
            centralised dashboard.
          </section>
        </article>
      </div>
    );
};

export default CardContainer;