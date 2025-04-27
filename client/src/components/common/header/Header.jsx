import React, { useEffect } from "react";
import ListCharacters from "./ListCharacters";
import HeaderModes from "./HeaderModes";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSkeleton } from "@/redux/reducers/LoadingReducer";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const HeaderLoading = () => {
  return (
    <div className="w-[92rem] h-[4rem] flex justify-between items-center flex-row">
      <div className="flex-[0.5] flex items-center">
        <Skeleton className="h-6 w-14 bg-[#E0E0E0] mr-3" />
        <div className="flex justify-around flex-[0.8]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton className="h-6 w-14 bg-[#E0E0E0]" key={index} />
          ))}
        </div>
      </div>
      <div className="flex-[0.4]">
        <div className="flex justify-between">
          <Skeleton className="h-6 w-28 bg-[#E0E0E0] rounded-2xl" />
          <div className="flex flex-row items-center">
            <Skeleton className="h-6 w-20 bg-[#E0E0E0]" />
          </div>
          <div className="flex items-center">
            <Skeleton className="h-6 w-20 bg-[#E0E0E0]" />
          </div>
        </div>
      </div>
    </div>
  );
};

const HeaderMobile = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex items-center gap-2 flex-1">
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://cdn-global-eude.popmart.com/global-web/eude-prod/assets/images/logo.png?x-oss-process=image/format,webp"
            alt="logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />
        </Link>
        <div className="relative flex-1">
          <input
            placeholder="Molly"
            className="w-full rounded-2xl bg-[#F4F4F4] text-[8px] sm:text-[10px] pl-3 pr-8 py-0.5 outline-0"
          />
          <i className="bx bx-search absolute right-2 top-1/2 -translate-y-1/2 text-[10px] sm:text-xs text-[#999999]" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Link to={"/cart"} className="flex-shrink-0">
          <Button
            variant="secondary"
            className="bg-transparent rounded-2xl hover:bg-transparent hover:border-black border-2 border-[#EEEEEE] w-8 h-8 sm:w-9 sm:h-9 p-0"
          >
            <i className="bx bx-cart text-base sm:text-lg"></i>
            <span className="text-xs sm:text-sm">{items.length}</span>
          </Button>
        </Link>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAkFBMVEXaJR3//wDZHhTjaWbYDx7upxHYAB7ZHh3ZFx7++ADZGx3/+wDZEh732Anyvw799APsoBLrmhP54AjeQxv43AjdOhvngBXzww3wtQ/0xwz1zgvjaRjvrxDeSRrqlRPpkBTohhXlehblcxfiYhj77AX20grbLhz76AbgVBnjZxjcNBvhXBn87wTvrBDxuQ7ldRbT9e9AAAAELklEQVR4nO3d6XaiQBAFYHsGqxEw7olL3OOSaJL3f7tRQWVpBTQZ7Or7/c7MgXu4AnbXsVQCAAAAAAAAAAAAAAAAAAAAAAAAgLNl0QfweKwXq+hDeDRyKIay6IN4MF5DNLyiD+LBUFM0qeiDeCyyJYRooTxh3miXyQjlCaP2LpM2yhMiO2Kvg/KceeNDJmOU54yqh0yqKM/ZUvjwfH9ij4NMxnbRh/IwaBFkskB5jqQ4wo0nYE9OmUxQHh/1T5n0UR6fJ87whHJgP4cyeUZ59kLVQXkC4eqgPAf2NJLJFOXZVacXyaSH8uyuEzeSiYvrpGTPRNQModBLLJMXlMepxDKpOEUfUtGceHWEGJgeCj0lMnkyvTxOLZFJzfDrxHlPRCLEu9mh0Jciky+zy2NvFZnUjH5CceaKSISYm1weq6vMpGvy9hxPVR0htgZ/YSA3ykiE2DD8/l5amdDrhUxeKdt/oFF0ctAtZ1FPPrAFd556pn/fHWgUit24cLI/q6HVTdsavv16ItuhZrcnx1M9of6kJ0+/pxiauukndjN3quULgNep/lok7Y6mjzCS6r8USZk0uuHE0PzS3fYetbmWvTmyZS/9HHPqlbS6BSvQJP0sc5lofZH4rM7qBxN5a2n2UKImL77W5NfV+MM1igbxRZzbuDMGvTmyl4v0M061WOr+4RohaXR3JA02vTmy1ve9Fb6tGfXmyHHueSt8clj15oSmN0fyzPAi8Xkf7ZsSaXZYPJSoSSrfEMknuw/XqPxvhbV3tr05smU/PYeQvvZvfFnQOD2JkzH7i8RntbK+Fa50+xr6dpS1PgbtNF+mpxEwZkDQzv41kzFjGpmrY1B5ltkXflxDyhMbxLjOkDENyvNVviljGnnWTN2iD/a/sL9zRCLEtwnlyVUdQ8qTGMS4zoQxjcQMU5oZ/1AUgxjXGTCm4eVd/nI13WmSnWKGyVdpXAqLfXmUgxg71Q9aXtjWxH5Mg9RXQ51kSZJ6B2mFeSbOQHXW241/2rRR7r9nPiBoqarTO63x2U58svZQHt5fQKqqE9l4pNrWVGNdHsUMUzO28chqNRN/w3rGKTnD9JpY45P0mfgjzuWh2CJgZaCqRWJbE+fyyHX0XBcX1vgSa4VrvgvGVnSz3+jy2nhsrZBxeSj8+HF91CQ67LJlW55Idb5SNlDIyFsA2/JYoRtKhlET+j5/cfvJtTx0WjqvZho1CQ27rJiWRw6PZ1jPuPEoNOzC9AcBrGDf1jbHqMnprbDMszyWX518oya29N8KVywzCaozybthL3grZFkeb//ZsLph1MQfdqlz/FqWmreOmhyGXTj+msb+FzGUb3xZ0MDl+GsaXrl9x65Ou1Qt8yuPnN21G1rSjN91Urr3lBhGAgAAAAAAAAAAAAAAAAAAAAAAAAAAAACgkz8QV/oLcf8Agm46TsQaDiQAAAAASUVORK5CYII="
          alt="flag"
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
        />
        <Sheet>
          <SheetTrigger>
            <i className="bx bx-menu text-xl sm:text-2xl"></i>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] bg-white p-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn-global-eude.popmart.com/global-web/eude-prod/assets/images/logo.png?x-oss-process=image/format,webp"
                alt="Logo"
                className="h-7 w-7 sm:h-8 sm:w-8 object-cover rounded-full"
              />
              <div>
                <h2 className="text-sm sm:text-base font-bold text-gray-800">Pop Mart</h2>
                <p className="text-xs text-gray-500">Xin chào bạn!</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-yellow-500 transition">
                <i className="bx bx-home-alt-2 text-lg sm:text-xl"></i>
                <span className="text-sm sm:text-base font-medium">Trang chủ</span>
              </Link>
              <Link to={'/collection/New Arrival'} className="flex items-center gap-2 text-gray-700 hover:text-yellow-500 transition">
                <i className="bx bx-shopping-bag text-lg sm:text-xl"></i>
                <span className="text-sm sm:text-base font-medium">Sản phẩm mới</span>
              </Link>
              <Link to="/collection/TOP SELLINGS" className="flex items-center gap-2 text-gray-700 hover:text-yellow-500 transition">
                <i className="bx bx-gift text-lg sm:text-xl"></i>
                <span className="text-sm sm:text-base font-medium">Bán chạy nhất</span>
              </Link>
              <Link to="/payment" className="flex items-center gap-2 text-gray-700 hover:text-yellow-500 transition">
                <i className="bx bx-info-circle text-lg sm:text-xl"></i>
                <span className="text-sm sm:text-base font-medium">Thanh toán</span>
              </Link>
              <Link to="/cart" className="flex items-center gap-2 text-gray-700 hover:text-yellow-500 transition">
                <i className="bx bx-cart text-lg sm:text-xl"></i>
                <span className="text-sm sm:text-base font-medium">Giỏ hàng</span>
              </Link>
            </div>
            <div className="mt-auto">
              <Button
                variant="outline"
                className="w-full rounded-full text-sm sm:text-base font-semibold hover:bg-yellow-400 hover:text-white transition"
              >
                Đăng nhập / Đăng ký
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSkeleton());
    }, 2000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm">
      {/* Mobile Header */}
      <div className="block lg:hidden w-full px-3 py-2">
        <HeaderMobile />
      </div>
      
      {/* Desktop Header */}
      <div className="hidden lg:block w-full">
        <div className="max-w-[1440px] mx-auto px-4">
          {isLoading ? (
            <HeaderLoading />
          ) : (
            <div className="h-[3.5rem] flex justify-between items-center">
              <ListCharacters />
              <HeaderModes />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;