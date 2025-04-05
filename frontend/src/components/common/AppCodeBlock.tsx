import React, { useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface AppCodeBlockProps {
  code: string;
  language?: string;
  showCopy?: boolean;
}

const AppCodeBlock: React.FC<AppCodeBlockProps> = ({
  code,
  language = "tsx",
  showCopy = true,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Box position="relative" borderRadius={2} overflow="hidden">
      {showCopy && (
        <Tooltip title={copied ? "Copied!" : "Copy"}>
          <IconButton
            size="small"
            onClick={handleCopy}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1,
              backgroundColor: "rgba(0,0,0,0.4)",
              color: "#fff",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
            }}
          >
            {copied ? (
              <CheckIcon fontSize="small" />
            ) : (
              <ContentCopyIcon fontSize="small" />
            )}
          </IconButton>
        </Tooltip>
      )}

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{ margin: 0, padding: "1rem", borderRadius: "0.5rem" }}
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  );
};

export default AppCodeBlock;
