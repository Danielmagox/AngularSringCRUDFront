import { TestBed, inject } from "@angular/core/testing";

import { PersonaService } from "./service.service";

describe("ServiceService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonaService],
    });
  });

  it("should be created", inject(
    [PersonaService],
    (service: PersonaService) => {
      expect(service).toBeTruthy();
    }
  ));
});
