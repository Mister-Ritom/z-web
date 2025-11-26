export default function CsaeSafetyPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold">Z — Child Safety &amp; CSAE Standards</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600">Clear rules, reporting steps, and moderation practices to prevent and respond to Child Sexual Abuse and Exploitation (CSAE).</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1. Our Commitment</h2>
          <p className="text-gray-700">Z strictly prohibits any content, behavior, or material that exploits or harms children. Any content or user found to be involved in child sexual abuse or exploitation will be removed and reported to the appropriate authorities without delay.</p>
        </section>

        <section className="mt-6 space-y-4">
          <h2 className="text-xl font-semibold">2. What We Prohibit</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Sexual content involving minors or content that sexualizes a person known or reasonably believed to be under 18.</li>
            <li>Images, videos, or descriptions of sexual acts involving minors.</li>
            <li>Solicitation of sexual activity with minors or content that facilitates exploitation.</li>
            <li>Attempts to identify, contact, or groom minors for sexual purposes.</li>
          </ul>
        </section>

        <section className="mt-6 space-y-4">
          <h2 className="text-xl font-semibold">3. Reporting &amp; How Users Can Help</h2>
          <p className="text-gray-700">Users should report any suspected CSAE content or behavior immediately. Reports can be made via:</p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>In‑app Report button on the content or user profile.</li>
            <li>Email: <a href="mailto:ritomghosh856@gmail.com" className="underline">ritomghosh856@gmail.com</a></li>
            <li>Web form: <a href="/report" className="underline">/report</a></li>
          </ol>
          <p className="text-sm text-gray-500">Provide as much detail as possible (user handle, links, screenshots, timestamps). We do not ask reporters for unnecessary personal information.</p>
        </section>

        <section className="mt-6 space-y-4">
          <h2 className="text-xl font-semibold">4. Moderation &amp; Response</h2>
          <p className="text-gray-700">Z uses a combination of automated detection, human review, and community reports to identify and remove CSAE content. When a report is received or content is flagged:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Content is immediately reviewed and removed if it violates policy.</li>
            <li>Offending accounts are suspended or banned depending on severity.</li>
            <li>Relevant evidence is preserved and, where required by law, shared with law enforcement.</li>
          </ul>
        </section>

        <section className="mt-6 space-y-4">
          <h2 className="text-xl font-semibold">5. Cooperation With Authorities</h2>
          <p className="text-gray-700">Z cooperates with law enforcement and follows legal obligations for reporting CSAE. When appropriate and permitted by law, Z will provide necessary information to assist investigations.</p>
        </section>

        <section className="mt-6 space-y-4">
          <h2 className="text-xl font-semibold">6. Privacy &amp; Data Handling</h2>
          <p className="text-gray-700">We store only the data necessary to investigate reports (content, metadata, timestamps). We limit access to this data to authorized safety and legal personnel and retain it according to our retention policy and applicable laws.</p>
        </section>

        <section className="mt-6 space-y-4">
          <h2 className="text-xl font-semibold">7. Prevention &amp; Education</h2>
          <p className="text-gray-700">Z invests in prevention through user education, safety prompts, and clear guidelines in our Terms of Use and Community Guidelines. We encourage users to follow best practices to keep themselves and others safe online.</p>
        </section>

        <section className="mt-6 space-y-4">
          <h2 className="text-xl font-semibold">8. Contact &amp; Effective Date</h2>
          <p className="text-gray-700">If you have questions about this policy or need to report urgent concerns, email: <a href="mailto:ritomghosh856@gmail.com" className="underline">ritomghosh856@gmail.com</a>. This policy is effective as of <strong>Nov 26, 2025</strong>.</p>
        </section>

        <footer className="mt-8 text-sm text-gray-500">
          <p>Note: This page is intended to clearly communicate Z's stance and processes related to CSAE. Adapt the contact emails, links, and retention specifics to match your live systems and legal counsel recommendations.</p>
        </footer>
      </div>
    </main>
  );
}
