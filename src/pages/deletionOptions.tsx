export default function DeletionOptions() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center">Data Removal Options</h1>
        <p className="text-gray-600 text-center">
          Choose the type of data you want to remove from your Z (Ananta) account.
        </p>

        <div className="space-y-4">
          {/* Account Deletion */}
          <div className="p-5 rounded-xl border bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Delete Account</h2>
            <p className="text-gray-600 mb-3">
              Permanently delete your full account and all associated data.
            </p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              <li>Open the Z app.</li>
              <li>Go to <strong>Profile → Settings → Account</strong>.</li>
              <li>Select <strong>Delete Account</strong>.</li>
              <li>Confirm the deletion.</li>
            </ol>
          </div>

          {/* Post Deletion */}
          <div className="p-5 rounded-xl border bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Delete Posts</h2>
            <p className="text-gray-600 mb-3">
              Remove any photo, video, audio, or text post you created.
            </p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              <li>Open the Z app.</li>
              <li>Go to your <strong>Profile</strong>.</li>
              <li>Open any post you want to delete.</li>
              <li>Tap the <strong>Options (⋮)</strong> button.</li>
              <li>Select <strong>Delete Post</strong>.</li>
            </ol>
          </div>

          {/* Chat/Message Deletion */}
          <div className="p-5 rounded-xl border bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Delete Messages or Chats</h2>
            <p className="text-gray-600 mb-3">
              Delete selected messages or entire chat history.
            </p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              <li>Open any chat inside Z.</li>
              <li>Long-press a message to delete it.</li>
              <li>Or open chat options and choose <strong>Delete Chat</strong>.</li>
              <li>Confirm removal.</li>
            </ol>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm pt-4">
          For account deletion when you cannot log in, email: <br />
          <span className="font-semibold">ritomghosh856@gmail.com</span>
        </p>
      </div>
    </div>
  );
}
