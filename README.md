# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/b43efcc9-e38b-421b-bb58-fee1ad34906e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/b43efcc9-e38b-421b-bb58-fee1ad34906e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Framer Motion
- Radix UI

## New Interactive Features

This project now includes several new interactive features:

- **Modals**: Implemented using Radix UI. These can be used to display important information or forms in a pop-up window.
- **Dropdowns**: Implemented using Radix UI. These can be used to create interactive menus.
- **Tooltips**: Enhanced with additional animations and customization options using Radix UI.

## How to Use the New Components

### Modal

To use the modal component, import it and use it in your component as shown below:

```jsx
import Modal from "@/components/ui/modal";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ExampleComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div>
      <Button onClick={handleModalOpen}>Open Modal</Button>
      <Modal
        title="Modal Title"
        content="This is the modal content."
        actions={<Button onClick={handleModalClose}>Close</Button>}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};

export default ExampleComponent;
```

### Dropdown

To use the dropdown component, import it and use it in your component as shown below:

```jsx
import Dropdown from "@/components/ui/dropdown";
import { Button } from "@/components/ui/button";

const ExampleComponent = () => {
  const dropdownItems = [
    { label: "Option 1", onClick: () => alert("Option 1 selected") },
    { label: "Option 2", onClick: () => alert("Option 2 selected") },
    { label: "Option 3", onClick: () => alert("Option 3 selected") },
  ];

  return (
    <div>
      <Dropdown trigger={<Button>Open Dropdown</Button>} items={dropdownItems} />
    </div>
  );
};

export default ExampleComponent;
```

### Tooltip

To use the tooltip component, import it and use it in your component as shown below:

```jsx
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const ExampleComponent = () => {
  return (
    <div>
      <Tooltip>
        <TooltipTrigger>
          <Button>Hover me for tooltip</Button>
        </TooltipTrigger>
        <TooltipContent animation="fade-in" customClass="bg-gray-800 text-white">
          This is a tooltip example.
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default ExampleComponent;
```

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/b43efcc9-e38b-421b-bb58-fee1ad34906e) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
