import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";

const AddAddressDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="uppercase bg-black text-white rounded-none hover:bg-[#333]">
          Add a new address
        </Button>
      </DialogTrigger>
      <DialogContent className="add-address-dialog rounded-none">
        <DialogHeader className="mb-4">
          <DialogTitle className="dialog-title">ADD A NEW ADDRESS</DialogTitle>
        </DialogHeader>
        <form>
          <div className="grid">
            <div>
              <label htmlFor="firstName">First Name</label>
              <Input id="firstName" placeholder="* First Name" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Input id="lastName" placeholder="* Last Name" />
            </div>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <div className="flex">
              <span className="flex items-center justify-center px-3 bg-gray-100 border border-r-0 border-gray-300 text-gray-600 text-sm">+84</span>
              <Input id="phone" placeholder="Phone (In case we need to contact you about your order)" className="rounded-l-none" />
            </div>
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <Input id="address" placeholder="* Address" />
          </div>
          <div>
            <label htmlFor="apartment">Apartment, Suite, etc. (Optional)</label>
            <Input id="apartment" placeholder="Apartment, Suite, etc. (Optional)" />
          </div>
          <div className="grid">
            <div>
              <label htmlFor="city">City/Ward/Town/Village</label>
              <Input id="city" placeholder="* City/ward/town/village" />
            </div>
            <div>
              <label htmlFor="zip">Zip Code</label>
              <Input id="zip" placeholder="* Zip Code" />
            </div>
          </div>
          <div>
            <label htmlFor="province">Province/State</label>
            <Select>
              <SelectTrigger id="province">
                <SelectValue placeholder="* Province/State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hanoi">Hà Nội</SelectItem>
                <SelectItem value="hcm">Hồ Chí Minh</SelectItem>
                <SelectItem value="danang">Đà Nẵng</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="defaultAddress" />
            <label htmlFor="defaultAddress">Set as default address</label>
          </div>
          <Button type="submit" className="w-full bg-black text-white rounded-none hover:bg-[#333]">
            Save
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAddressDialog;