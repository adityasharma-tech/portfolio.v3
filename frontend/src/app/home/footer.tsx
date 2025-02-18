export default function Footer() {
  return (
    <footer id="footer" className="bg-neutral-900 py-10 px-10 grid gap-y-10 md:grid-cols-2 text-neutral-100">
    <div>
      <img src="rounded-icon.png" className="h-10" />
      <div className="max-w-lg text-sm mt-6">
      I am doing freelancing from a year. If you need to hire me or want to <br className="md:block hidden"/> contact me, ping me on X, linked.
      </div>
    </div>
    <div className="flex flex-col gap-y-3">
      <span className="font-medium text-2xl">Contact</span>
      <div></div>
      <a href="https://x.com/@AdityaSharma626">
        Developed by:{" "}
        <strong className="font-semibold hover:underline underline-offset-3">
          Aditya Sharma
        </strong>
      </a>
      <a
        href="mailto:aditya@adityasharma.live"
        className="hover:underline underline-offset-2"
      >
        aditya@adityasharma.live
      </a>
      <a
        href="https://www.adityasharma.live"
        target="_blank"
        className="hover:underline underline-offset-2"
      >
        www.adityasharma.live
      </a>
    </div>
  </footer>
  )
}
