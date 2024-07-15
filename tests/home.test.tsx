import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import HomePage from "../app/page";

vi.mock("@clerk/nextjs", () => {
  const mockedFunctions = {
    auth: () => ({ userId: "user_2NNEqL2nrIRdJ194ndJqAHwEfxC" }),
    ClerkProvider: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    useUser: () => ({
      isSignedIn: true,
      user: {
        id: "user_2NNEqL2nrIRdJ194ndJqAHwEfxC",
        fullName: "John Doe",
      },
    }),
  };

  return mockedFunctions;
});

test(`Home`, async () => {
  render(await HomePage());
  expect(screen.getByText("The best Journal app, period.")).toBeTruthy();
});
