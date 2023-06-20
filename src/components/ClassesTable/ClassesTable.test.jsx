import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ClassesTable } from "./ClassesTable";

describe("ClassesTable", () => {
  test("should render the table", () => {
    const classes = [
      {
        id: 1,
        name: "Matemática",
        missedClasses: 2,
        grades: [{ grade: 10 }, { grade: 9 }, { grade: 8 }],
      },
    ];

    render(<ClassesTable classes={classes} />);

    expect(screen.getByRole("cell", { name: /Matemátia/i })).toBeTruthy();
  });
});
