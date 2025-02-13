import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import HighlightedText from "./HighlightedText";

interface BaseListItemProps {
  selected?: boolean;
  onClick?: () => void;
}

interface StandardListItemProps extends BaseListItemProps {
  variant: "standard";
  icon: ReactNode;
  title: string;
  description?: string | null;
  searchQuery?: string;
  suffixIcon?: ReactNode;
}

interface DividerListItemProps extends BaseListItemProps {
  variant: "divider";
  label?: string;
}

interface SubtitleListItemProps extends BaseListItemProps {
  variant: "subtitle";
  text: string;
}

interface LinkListItemProps extends BaseListItemProps {
  variant: "link";
  icon?: ReactNode;
  label: string;
}

interface NoResultsListItemProps extends BaseListItemProps {
  variant: "no-results";
  query: string;
}

type ListItemProps =
  | StandardListItemProps
  | DividerListItemProps
  | SubtitleListItemProps
  | LinkListItemProps
  | NoResultsListItemProps;

export default function ListItem(props: ListItemProps) {
  const { variant, selected = false, onClick } = props;

  if (variant === "no-results") {
    return (
      <div className="px-3 py-2 text-sm text-gray-500">
        No results for "{props.query}"
      </div>
    );
  }

  if (variant === "divider") {
    return (
      <>
        <div className="h-[1px] bg-gray-200 my-2" />
      </>
    );
  }

  if (variant === "subtitle") {
    return (
      <div className="px-3 py-2 text-xs font-medium text-gray-500">
        {props.text}
      </div>
    );
  }

  if (variant === "link") {
    return (
      <div
        className={cn(
          "group px-3 py-2 hover:bg-gray-100 hover:text-gray-800 cursor-pointer flex items-center gap-2 text-sm text-gray-500",
          selected && "bg-gray-100"
        )}
        onClick={onClick}
      >
        <span>{props.label}</span>
        {props.icon && <span className="text-gray-500">{props.icon}</span>}
      </div>
    );
  }

  // Standard variant
  return (
    <div
      className={cn(
        "group px-3 py-2 hover:bg-gray-100 h-[32px] cursor-pointer flex items-center gap-2",
        selected && "bg-gray-100"
      )}
      onClick={onClick}
    >
      <div className="flex-shrink-0 text-gray-500">{props.icon}</div>

      <div className="flex items-center gap-2 w-[calc(100%-20px)]">
        <div className="flex items-center justify-between flex-1 min-w-0">
          <div className="flex items-center gap-2 min-w-0 flex-1 ">
            <HighlightedText
              text={props.title}
              highlight={props.searchQuery || ""}
              className="text-sm flex-shrink-0 truncate max-w-full  "
            />
            {props.description && (
              <div className="text-xs text-gray-500 truncate">
                <HighlightedText
                  text={props.description}
                  highlight={props.searchQuery || ""}
                  className="text-xs text-gray-500"
                />
              </div>
            )}
          </div>
          {props.suffixIcon && (
            <div className="flex-shrink-0 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
              {props.suffixIcon}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
