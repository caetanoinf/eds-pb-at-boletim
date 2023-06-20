import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { DocumentsTable } from "./DocumentsTable";
import { Timestamp } from "firebase/firestore";

describe("DocumentsTable", () => {
  test("should render the table with document type", () => {
    const documents = [
      {
        id: 1,
        timestamp: Timestamp.fromDate(new Date(1634272800000)),
        document: "historico",
      },
      {
        id: 2,
        timestamp: Timestamp.fromDate(new Date(1634272800000)),
        document: "declaracao",
      },
      {
        id: 3,
        timestamp: Timestamp.fromDate(new Date(1634272800000)),
        document: "certificate",
      },
    ];

    render(<DocumentsTable documents={documents} />);

    const rows = screen.getAllByRole("row");

    expect(rows).toHaveLength(4);
    expect(rows[1]).toHaveTextContent("Histórico Escolar");
    expect(rows[2]).toHaveTextContent("Declaração de Matrícula");
    expect(rows[3]).toHaveTextContent("Certificado/Diploma");
  });

  test("should render empty state", () => {
    render(<DocumentsTable documents={[]} />);

    expect(screen.getByText(/Nenhum documento solicitado/i)).toBeTruthy();
  });

  test("should render loading state", () => {
    render(<DocumentsTable isLoading />);

    expect(screen.getByRole("progressbar")).toBeTruthy();
  });
});
