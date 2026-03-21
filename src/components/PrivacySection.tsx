import Image from "next/image";

export default function PrivacySection() {
  return (
    <section className="bg-parlia-green text-white py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-8">
        <div className="flex-shrink-0">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Privacy
            <br />
            on
            <br />
            Parlia
          </h2>
        </div>
        <div className="flex items-start gap-4">
          <Image
            src="/images/shield-privacy.png"
            alt="Privacy shield"
            width={74}
            height={74}
            className="flex-shrink-0 mt-1"
          />
          <div className="text-sm leading-relaxed space-y-1">
            <p>
              Your opinions are always <strong>PRIVATE</strong> to you
            </p>
            <p>
              Your personal demographic information is <strong>SECURE</strong>
            </p>
            <p>
              Your opinions and personal data are <strong>NEVER SOLD</strong> to
              anyone
            </p>
            <p>
              We will <strong>NEVER TARGET</strong> or <strong>SPAM</strong> you
            </p>
            <p>
              Your data is always <strong>ANONYMOUS</strong>
            </p>
            <p>
              We share <strong>AGGREGATE INSIGHTS, NEVER PERSONAL</strong> data
            </p>
            <p>
              Our insights are <strong>ALWAYS SHARED BACK</strong> with you
            </p>
            <p>
              You can always <strong>LEAVE AT ANYTIME</strong>
            </p>
            <p>
              We adhere to our strict{" "}
              <strong className="underline">TERMS OF SERVICE</strong> and{" "}
              <strong className="underline">PRIVACY POLICY</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
