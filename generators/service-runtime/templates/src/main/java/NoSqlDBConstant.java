package <%=props.namespace%>;

/**
 *
 */
public interface NoSqlDBConstant {
    public static final String SERVICE_DB="PM8X";
    public static final String SERVICE_COLLECTION = "<%=props.component.toUpperCase()%>";
    public static final String SERVICE_DB_COLLECTION = SERVICE_DB + "." + SERVICE_COLLECTION;
}
