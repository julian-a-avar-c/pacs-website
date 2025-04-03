"use client";

import * as mainConfig from "@/config/main";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

function toAllUpperCase(s: string) {
  return s
    .split("")
    .map((char) => char.toUpperCase())
    .join("");
}
function toAllLowerCase(s: string) {
  return s
    .split("")
    .map((char) => char.toLowerCase())
    .join("");
}

const phone = mainConfig.site.links.find((link) => link.type === "phone")!;
const email = mainConfig.site.links.find((link) => link.type === "email")!;
const location = mainConfig.site.links.find(
  (link) => link.type === "location"
)!;
const linkedin = mainConfig.site.links.find(
  (link) => link.type === "linkedin"
)!;
const instagram = mainConfig.site.links.find(
  (link) => link.type === "instagram"
)!;

type NavSheetProps = {
  class?: string;
};

export function NavSheet({ class: className }: NavSheetProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-2", className)}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="hover:cursor-pointer">
            <Icon icon="fa6-solid:bars" height="auto" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="absolute z-100">
          <SheetHeader>
            <SheetTitle>
              <img alt="" src="/pacs_logo_extrasmall.png" className="w-60" />
            </SheetTitle>
            {/* <SheetDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              maiores magni, error quasi amet perspiciatis alias id atque,
              similique porro fugiat accusamus accusantium consectetur, sint
              maxime qui modi ut. Modi.
            </SheetDescription> */}

            <ul className="gap-6 text-base font-bold">
              {mainConfig.pages
                .filter((page) => page.name != "index")
                .map(({ href, name }) => (
                  <li
                    key={`navsheet-${name}`}
                    className="hover:ring-2 ring-zinc-950 rounded"
                  >
                    <a href={href} className="px-0 py-2 block">
                      {/* {toAllLowerCase(name === "index" ? "Home" : name)} */}
                      {toAllUpperCase(name)}
                    </a>
                  </li>
                ))}
            </ul>
            <ul className="flex flex-col gap-x-6 [&_a]:hover:underline">
              <li>
                <a href={phone.href} className="items-center flex gap-x-1">
                  <Icon icon={phone.icon!} />
                  <span>{phone.value}</span>
                </a>
              </li>
              <li>
                <a href={email.href} className="items-center flex gap-x-1">
                  <Icon icon={email.icon!} />
                  <span>{email.value}</span>
                </a>
              </li>
              <li>
                <span className="items-center flex gap-x-1">
                  <Icon icon={location.icon!} />
                  <span>{location.value}</span>
                </span>
              </li>
              <li>
                <a href={linkedin.href} className="items-center flex gap-x-1">
                  <Icon icon={linkedin.icon!} />
                  <span>@{linkedin.value}</span>
                </a>
              </li>
              <li>
                <a href={instagram.href} className="items-center flex gap-x-1">
                  <Icon icon={instagram.icon!} />
                  <span>@{instagram.value}</span>
                </a>
              </li>
            </ul>
          </SheetHeader>

          <SheetFooter>
            ...
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
