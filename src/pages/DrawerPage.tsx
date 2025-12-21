import { Link } from "react-router";

const DrawerPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">Drawer</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Component Usage</h2>
        <div className="bg-muted/50 p-6 rounded-lg">
          <p className="text-muted-foreground mb-4">
            Component implementation code will be added here.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">TWD Test Code</h2>
        <div className="bg-muted/50 p-6 rounded-lg">
          <p className="text-muted-foreground mb-4">
            TWD test code will be added here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrawerPage;
