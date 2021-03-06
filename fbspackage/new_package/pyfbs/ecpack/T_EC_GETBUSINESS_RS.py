# automatically generated by the FlatBuffers compiler, do not modify

# namespace: ecpack

import flatbuffers

class T_EC_GETBUSINESS_RS(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_EC_GETBUSINESS_RS(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_EC_GETBUSINESS_RS()
        x.Init(buf, n + offset)
        return x

    # T_EC_GETBUSINESS_RS
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_EC_GETBUSINESS_RS
    def SRsHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RS_HEAD import S_RS_HEAD
            obj = S_RS_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_EC_GETBUSINESS_RS
    def SellerId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_EC_GETBUSINESS_RS
    def SellerType(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int32Flags, o + self._tab.Pos)
        return 0

    # T_EC_GETBUSINESS_RS
    def SellerAvatar(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_EC_GETBUSINESS_RS
    def SellerName(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_EC_GETBUSINESS_RS
    def SellerUrl(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

def T_EC_GETBUSINESS_RSStart(builder): builder.StartObject(6)
def T_EC_GETBUSINESS_RSAddSRsHead(builder, sRsHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRsHead), 0)
def T_EC_GETBUSINESS_RSAddSellerId(builder, sellerId): builder.PrependUint64Slot(1, sellerId, 0)
def T_EC_GETBUSINESS_RSAddSellerType(builder, sellerType): builder.PrependInt32Slot(2, sellerType, 0)
def T_EC_GETBUSINESS_RSAddSellerAvatar(builder, sellerAvatar): builder.PrependUOffsetTRelativeSlot(3, flatbuffers.number_types.UOffsetTFlags.py_type(sellerAvatar), 0)
def T_EC_GETBUSINESS_RSAddSellerName(builder, sellerName): builder.PrependUOffsetTRelativeSlot(4, flatbuffers.number_types.UOffsetTFlags.py_type(sellerName), 0)
def T_EC_GETBUSINESS_RSAddSellerUrl(builder, sellerUrl): builder.PrependUOffsetTRelativeSlot(5, flatbuffers.number_types.UOffsetTFlags.py_type(sellerUrl), 0)
def T_EC_GETBUSINESS_RSEnd(builder): return builder.EndObject()
