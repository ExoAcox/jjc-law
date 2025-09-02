import Responsive from "@components/Responsive";

const GetInTouch = () => {
  return (
    <Responsive>
      <div className="flex gap-20 border-b-2 py-7">
        <h2>Get in touch</h2>
        <div className="grid grid-cols-2 gap-x-24 mx-auto w-fit">
          <p>Social media</p>
          <p>test</p>
        </div>
      </div>
      <div className="flex gap-20 py-7">
        <h2>Location</h2>
        <div className="hidden lg:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2832744910847!2d112.67117127476092!3d-7.322044192686061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fce4a1c6a07f%3A0x5d2e3f3835b5d8f6!2sJl.%20Royal%20Residence%2C%20Sumur%20Welut%2C%20Kec.%20Lakarsantri%2C%20Surabaya%2C%20Jawa%20Timur%2060215!5e0!3m2!1sid!2sid!4v1751021632516!5m2!1sid!2sid"
            width="400"
            height="250"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Responsive>
  );
};

export default GetInTouch;
