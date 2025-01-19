import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      toast.error(`API Error: ${error.message}`);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error, _, __, mutation) => {
      const { mutationKey } = mutation.options;
      toast.error(`API Mutation Error ${mutationKey ? `: ${mutation}` : ""}`);
    },
  }),
});
