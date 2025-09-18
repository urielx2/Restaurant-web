import { Container } from "../layout";
import { ButtonLink } from "../ui";

export const Ubication = () => {
  return (
    <div id="contact" className="bg-secondary text-black">
      <Container>
        <h2 className="text-3xl font-semibold text-center mb-10">Ubicación</h2>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-5 md:w-1/2">
            <div>
              <h3 className="font-semibold text-lg">Télefono para pedidos</h3>
              <span>+52 81 236 873 20</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Ubicación</h3>
              <span>466 Miguel Hidalgo, 67960 Gral. Zaragoza, N.L.</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Horario</h3>
              <span className="block">Lunes a domingo</span>
              <span>7pm a 12pm</span>
            </div>

            <div className="mt-5">
              <ButtonLink
                href="https://maps.app.goo.gl/AUWb25e9WHNi19kM8"
                text="Visitar"
                className="bg-primary text-white hover:bg-amber-400 shadow-lg shadow-[#D4AF37]/40"
              />
            </div>
          </div>

          <div className="md:w-4xl h-90">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.1603764969577!2d-99.77332712460294!3d23.971383978520237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x867c2eff0038e73f%3A0xdd7dac72dd2b447d!2sTacos%20y%20Hamburguesas%20Erick!5e1!3m2!1ses-419!2smx!4v1756423336256!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};
