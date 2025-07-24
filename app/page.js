// app/page.js
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
      <div className="max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🚧 Trebo Consult
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Our website is currently undergoing scheduled maintenance.
          <br />
          We’ll be back shortly — thank you for your patience!
        </p>
        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <p className="text-sm text-gray-500">
            For urgent inquiries, please email us at <br />
            <a
              href="mailto:info@trebo-consult.co.za"
              className="text-blue-600 hover:underline"
            >
              obert@trebo-consult.co.za
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
