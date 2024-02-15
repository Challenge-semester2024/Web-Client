import { create } from "zustand";

export const userToken = create((set) => ({
  accessToken: "",
  setAccessToken: (newToken) => set({ accessToken: newToken }),
}));

export const CenterInfoController = create((set) => ({
  file2: null,
  CenterInfo: {
    ceoName: "",
    centerName: "",
    centerPhone: "",
    centerRoadAddress: "",
    centerdetailAddress: "",
  },
  setBusinessFile: (file) => set({ file2: file }),
  setCenterInfo: (CenterInfo) => set({ CenterInfo }),
}));
